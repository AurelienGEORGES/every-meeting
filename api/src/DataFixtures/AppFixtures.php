<?php

namespace App\DataFixtures;

use Faker\Factory;
use Faker\Generator;
use App\Entity\ToDoListItem;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    /**
     * @var Generator
     */
    private Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager): void
    {
        for ($i = 1; $i <= 10; $i++) {
            $item = new ToDoListItem();
            $item->setContent($this->faker->sentence());
            $item->setPriority($this->faker->numberBetween(1, 5));
            $item->setDeadline(\DateTimeImmutable::createFromMutable($this->faker->dateTime()));
            $item->setDone($this->faker->numberBetween(1, 5));
            $item->setDifficulty($this->faker->numberBetween(1, 5));
            $item->setCreatedAt(\DateTimeImmutable::createFromMutable($this->faker->dateTime()));
            $item->setUpdatedAt(\DateTimeImmutable::createFromMutable($this->faker->dateTime()));
            $manager->persist($item);
        }
        $manager->flush();
    }
}
