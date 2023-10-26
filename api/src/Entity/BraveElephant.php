<?php

namespace App\Entity;

use App\Repository\BraveElephantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BraveElephantRepository::class)]
class BraveElephant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $brave = null;

    #[ORM\Column(length: 255)]
    private ?string $Elephant = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBrave(): ?string
    {
        return $this->brave;
    }

    public function setBrave(string $brave): static
    {
        $this->brave = $brave;

        return $this;
    }

    public function getElephant(): ?string
    {
        return $this->Elephant;
    }

    public function setElephant(string $Elephant): static
    {
        $this->Elephant = $Elephant;

        return $this;
    }
}
