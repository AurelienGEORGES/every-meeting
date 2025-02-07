<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class GatewayService
{
    private string $gatewayUrl;

    public function __construct(string $gatewayUrl, private HttpClientInterface $httpClient)
    {
        $this->gatewayUrl = $gatewayUrl;
    }

    public function sendEvent(array $data): void
    {
        if (!empty($data)) {
            $dataEvent = [
                'event_type'    => $data['event_type'],
                'resource_id'   => $data['resource_id'],
                'resource_type' => $data['resource_type'],
                'metadata'      => $data['metadata'],
            ];

            $this->httpClient->request('POST', $this->gatewayUrl, [
                'json' => $dataEvent,
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
            ]);
        }
    }

    public function getEvents(): array
    {
        $response = $this->httpClient->request('GET', $this->gatewayUrl, [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
        ]);
        return $response->toArray();
    }
}