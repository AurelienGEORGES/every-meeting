<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ButtonController extends AbstractController
{
    #[Route('/api', name: 'app_api', methods: ['GET'])]
    public function index(): JsonResponse
    {
        // Mettez en place la logique pour renvoyer la réponse JSON
        $message = "Vous avez communiqué avec votre API.";
        $data = [
            'message' => $message,
        ];

        // Utilisez JsonResponse pour renvoyer les données JSON
        return new JsonResponse($data);
    }
}
