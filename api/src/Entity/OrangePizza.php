<?php

namespace App\Entity;

use App\Repository\OrangePizzaRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrangePizzaRepository::class)]
class OrangePizza
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $color = null;

    #[ORM\Column(length: 255)]
    private ?string $pizza = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getPizza(): ?string
    {
        return $this->pizza;
    }

    public function setPizza(string $pizza): static
    {
        $this->pizza = $pizza;

        return $this;
    }
}
