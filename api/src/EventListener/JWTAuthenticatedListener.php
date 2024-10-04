<?php

namespace App\EventListener;

use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class JWTAuthenticatedListener
{
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData(); // Les données de la réponse (contient le token)
        $user = $event->getUser(); // L'utilisateur authentifié

        if (!$user instanceof UserInterface) {
            return;
        }

        // Ajouter les informations de l'utilisateur dans la réponse
        $data['user'] = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
        ];

        $event->setData($data); // Mettre à jour la réponse avec les nouvelles données
    }
}
