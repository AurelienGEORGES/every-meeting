<?php

namespace App\Tests;

use DateTime;
use DateTimeImmutable;
use App\Entity\ToDoListItem;
use App\Factory\ToDoListItemFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class ToDoListItemIntegrationTest extends ApiTestCase
{
    use ResetDatabase;
    use Factories;

    public function testGetToDoListItems(): void
    {
        ToDoListItemFactory::createMany(10);
        $client = static::createClient();
        $client->request(
            'GET',
            '/api/to_do_list_items'
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testGetToDoListItem(): void
    {
        ToDoListItemFactory::createOne([
            'content' => 'super hello world!',
            'priority' => 4,
            'difficulty' => 4,
            'deadline' => new DateTime('2024-08-27 07:29:07'),
            'done' => 1,
            'createdAt' => new DateTimeImmutable(),
            'updatedAt' => new DateTimeImmutable()
        ]);
        $client = static::createClient();
        $iri = $this->findIriBy(ToDoListItem::class, ['content' => 'super hello world!']);
        $client->request(
            'GET',
            $iri
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testCreateToDoListItem(): void
    {
        $client = static::createClient();
        $client->request(
            'POST',
            '/api/to_do_list_items',
            ['json' => [
                'content' => 'mega hello world!',
                'priority' => 3,
                'difficulty' => 3,
                'deadline' => '2026-01-11T10:26:00',
                'done' => 1,
                'createdAt' => '2023-01-11T10:26:00',
                'updatedAt' => '2025-01-11T10:26:00'
            ]],
            ['content-type' => 'application/ld+json; charset=utf-8']
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testUpdateToDoListItem(): void
    {
        ToDoListItemFactory::createOne([
            'content' => 'yo hello world!',
            'priority' => 2,
            'difficulty' => 2,
            'deadline' => new \DateTimeImmutable('2026-01-11T10:26:00'),
            'done' => 1,
            'createdAt' => new \DateTimeImmutable('2023-01-11T10:26:00'),
            'updatedAt' => new \DateTimeImmutable('2025-01-11T10:26:00')
        ]);
        $client = static::createClient();
        $iri = $this->findIriBy(ToDoListItem::class, ['content' => 'yo hello world!']);
        $client->request(
            'PUT',
            $iri,
            ['json' => [
                'content' => 'big hello world!',
                'priority' => 2,
                'difficulty' => 2,
                'deadline' => '2026-01-11T10:26:00',
                'done' => 1,
                'createdAt' => '2023-01-11T10:26:00',
                'updatedAt' => '2025-01-11T10:26:00'
            ]]
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testPatchToDoListItem(): void
    {
        ToDoListItemFactory::createOne([
            'content' => 'man hello world!',
            'priority' => 2,
            'difficulty' => 2,
            'deadline' => new \DateTime('2026-01-11T10:26:00'),
            'done' => 1,
            'createdAt' => new \DateTimeImmutable(),
            'updatedAt' => new \DateTimeImmutable()
        ]);
        $client = static::createClient();
        $iri = $this->findIriBy(ToDoListItem::class, ['content' => 'man hello world!']);
        $client->request(
            'PATCH',
            $iri,
            ['headers' => [
                'Content-Type' => 'application/merge-patch+json',
            ], 'json' => ['content' => 'hoho hello world']]
        );
        $this->assertResponseIsSuccessful();
    }

    public function testDeleteToDoListItem(): void
    {
        ToDoListItemFactory::createOne([
            'content' => 'cool hello world!',
            'priority' => 2,
            'difficulty' => 2,
            'deadline' => new \DateTime('2026-01-11T10:26:00'),
            'done' => 1,
            'createdAt' => new \DateTimeImmutable(),
            'updatedAt' => new \DateTimeImmutable()
        ]);
        $client = self::createClient();
        $iri = $this->findIriBy(ToDoListItem::class, ['content' => 'cool hello world!']);
        $client->request('DELETE', $iri);
        $this->assertResponseStatusCodeSame(204);
        $this->assertNull(
            static::getContainer()
                ->get('doctrine')
                ->getRepository(ToDoListItem::class)
                ->findOneBy(['content' => 'cool hello world!'])
        );
    }
}
