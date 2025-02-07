<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Service\GatewayService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class LogController extends AbstractController
{
    #[Route('/logs', name: 'log', methods: ['GET'])]
    public function log(GatewayService $gatewayService, Security $security): JsonResponse
    {
        if (!$security->isGranted('ROLE_ADMIN')) {
            throw new AccessDeniedHttpException('Access Denied');
        }

        $events = $gatewayService->getEvents();

        return $this->json($events);
    }
}