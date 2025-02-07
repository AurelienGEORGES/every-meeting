<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use App\Entity\User;
use App\Entity\ToDoListItem;
use App\Service\GatewayService;
use ApiPlatform\Metadata\GetCollection;

class GatewaySubscriber implements EventSubscriberInterface
{
    public function __construct(private GatewayService $gatewayService)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::RESPONSE => 'onKernelRequest'
        ];
    }

    public function onKernelRequest(ResponseEvent $event): void
    {
        if ($_ENV['APP_ENV'] !== 'test') {
            $operation = $event->getRequest()->attributes->get('_api_operation');
            if (!is_null($operation) && !is_null($operation->getUriTemplate()) && !$operation instanceof GetCollection) {
                $response = $event->getResponse();
                $className = $operation->getShortName();
                $instance = $event->getRequest()->attributes->get('data');
                $entityShortName = strtolower($className);
                $content = json_decode($response->getContent(), true);
                $data = [];
                if (201 === $response->getStatusCode()) {
                    if ($instance instanceof User) {
                        $data = [
                            'id' => $content['id'],
                            'event_type' => 'user_created',
                            'resource_id' => $content['id'],
                            'resource_type' => $entityShortName,
                            'metadata' => [
                                'username' => $content['username'],
                                'email' => $content['email'],
                            ]
                        ];
                    }
                    if ($instance instanceof ToDoListItem) {
                        $data = [
                            'id' => $content['id'],
                            'event_type' => 'todolistitem_created',
                            'resource_id' => $content['id'],
                            'resource_type' => $entityShortName,
                            'metadata' => [
                                'content' => $content['content'],
                            ]
                        ];
                    }
                }

                if (200 === $response->getStatusCode()) {
                    if ($event->getRequest()->getMethod() === 'PUT') {
                        if ($instance instanceof ToDoListItem) {
                            $data = [
                                'id' => $content['id'],
                                'event_type' => 'todolistitem_updated',
                                'resource_id' => $content['id'],
                                'resource_type' => $entityShortName,
                                'metadata' => [
                                    'content' => $content['content'],
                                ]
                            ];
                        }
                    }
                }

                if (204 === $response->getStatusCode()) {
                    $previousData = $event->getRequest()->attributes->get('previous_data');
                    if ($instance instanceof ToDoListItem) {
                        $data = [
                            'id' => $previousData->getId(),
                            'event_type' => 'todolistitem_deleted',
                            'resource_id' => $previousData->getId(),
                            'resource_type' => $entityShortName,
                            'metadata' => [
                                'content' => $previousData->getContent(),
                            ]
                        ];
                    }
                }
                $this->gatewayService->sendEvent($data);
            }
        }
    }
}
