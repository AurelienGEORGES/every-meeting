<?php

namespace App\State;

use ApiPlatform\Metadata\CollectionOperationInterface;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Repository\ToDoListItemRepository;
use Symfony\Bundle\SecurityBundle\Security;

class ToDoListStateProvider implements ProviderInterface
{
    public function __construct(
        private ToDoListItemRepository $toDoListItemRepository,
        private Security $security
    ) {
    }

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): ?array
    {
        if ($operation instanceof CollectionOperationInterface) {
            $user = $this->security->getUser();
            return $this->toDoListItemRepository->findBy(['user' => $user]);
        }
        return null;
    }
}
