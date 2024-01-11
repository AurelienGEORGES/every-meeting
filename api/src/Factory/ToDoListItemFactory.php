<?php

namespace App\Factory;

use App\Entity\ToDoListItem;
use App\Repository\ToDoListItemRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<ToDoListItem>
 *
 * @method        ToDoListItem|Proxy                     create(array|callable $attributes = [])
 * @method static ToDoListItem|Proxy                     createOne(array $attributes = [])
 * @method static ToDoListItem|Proxy                     find(object|array|mixed $criteria)
 * @method static ToDoListItem|Proxy                     findOrCreate(array $attributes)
 * @method static ToDoListItem|Proxy                     first(string $sortedField = 'id')
 * @method static ToDoListItem|Proxy                     last(string $sortedField = 'id')
 * @method static ToDoListItem|Proxy                     random(array $attributes = [])
 * @method static ToDoListItem|Proxy                     randomOrCreate(array $attributes = [])
 * @method static ToDoListItemRepository|RepositoryProxy repository()
 * @method static ToDoListItem[]|Proxy[]                 all()
 * @method static ToDoListItem[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static ToDoListItem[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static ToDoListItem[]|Proxy[]                 findBy(array $attributes)
 * @method static ToDoListItem[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static ToDoListItem[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 */
final class ToDoListItemFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        return [
            'content' => self::faker()->text(),
            'deadline' => self::faker()->dateTime(),
            'done' => self::faker()->numberBetween(0,3),
            'priority' => self::faker()->numberBetween(0,5),
            'createdAt' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
            'updatedAt' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime())
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(ToDoListItem $toDoListItem): void {})
        ;
    }

    protected static function getClass(): string
    {
        return ToDoListItem::class;
    }
}
