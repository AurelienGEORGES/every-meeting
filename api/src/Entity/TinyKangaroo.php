<?php

namespace App\Entity;

use App\Repository\TinyKangarooRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TinyKangarooRepository::class)]
class TinyKangaroo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $tiny = null;

    #[ORM\Column(length: 255)]
    private ?string $kangaroo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTiny(): ?string
    {
        return $this->tiny;
    }

    public function setTiny(string $tiny): static
    {
        $this->tiny = $tiny;

        return $this;
    }

    public function getKangaroo(): ?string
    {
        return $this->kangaroo;
    }

    public function setKangaroo(string $kangaroo): static
    {
        $this->kangaroo = $kangaroo;

        return $this;
    }
}
