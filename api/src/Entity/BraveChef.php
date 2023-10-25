<?php

namespace App\Entity;

use App\Repository\BraveChefRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BraveChefRepository::class)]
class BraveChef
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $brave = null;

    #[ORM\Column(length: 255)]
    private ?string $chef = null;

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

    public function getChef(): ?string
    {
        return $this->chef;
    }

    public function setChef(string $chef): static
    {
        $this->chef = $chef;

        return $this;
    }
}
