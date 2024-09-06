<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
// use ApiPlatform\Metadata\ApiFilter;
use App\State\ToDoListStateProvider;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
// use ApiPlatform\Doctrine\Odm\Filter\SearchFilter;
use App\Repository\ToDoListItemRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;


#[ORM\Entity(repositoryClass: ToDoListItemRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read']],
    denormalizationContext: ['groups' => ['write']],
    operations: [
        new Delete(),
        new Get(),
        new GetCollection(
            provider: ToDoListStateProvider::class,
        ),
        new Post(),
        new Patch(),
        new Put()
    ],
    // filters: ['todolistitem.search_filter']
)]
class ToDoListItem
{
    #[Groups(['read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank(message: 'votre todo ne peut pas être vide')]
    #[Assert\Length(min: 2, minMessage: 'votre todo dois faire au minimum 2 caractères')]
    private ?string $content = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    #[Assert\Length(min: 1, minMessage: 'la priorité minimum vaut 1')]
    #[Assert\Length(max: 5, maxMessage: 'la priorité maximum vaut 5')]
    private ?int $priority = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $deadline = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    #[Assert\Length(min: 1, minMessage: 'la réalisation minimum vaut 1')]
    #[Assert\Length(max: 5, maxMessage: 'la réalisation maximum vaut 5')]
    private ?int $done = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    #[Assert\Length(min: 1, minMessage: 'la difficultée minimum vaut 1')]
    #[Assert\Length(max: 5, maxMessage: 'la difficultée maximum vaut 5')]
    private ?int $difficulty = null;

    #[Groups(['read', 'write'])]
    #[ORM\ManyToOne(inversedBy: 'toDoListItems')]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getPriority(): ?int
    {
        return $this->priority;
    }

    public function setPriority(int $priority): static
    {
        $this->priority = $priority;

        return $this;
    }

    public function getDeadline(): ?\DateTimeImmutable
    {
        return $this->deadline;
    }

    public function setDeadline(\DateTimeImmutable $deadline): static
    {
        $this->deadline = $deadline;

        return $this;
    }

    public function getDone(): ?int
    {
        return $this->done;
    }

    public function setDone(int $done): static
    {
        $this->done = $done;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getDifficulty(): ?int
    {
        return $this->difficulty;
    }

    public function setDifficulty(?int $difficulty): static
    {
        $this->difficulty = $difficulty;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
