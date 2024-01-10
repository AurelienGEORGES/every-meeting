<?php

namespace App\Tests;

use App\Entity\Item;
use App\Factory\ItemFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class ItemFonctionnalTest extends ApiTestCase
{
    use ResetDatabase, Factories;

    public function testGetItems()
    {
        ItemFactory::createMany(10);
        $client = static::createClient();
        $client->request(
            'GET',
            '/api/items'
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testGetItem()
    {
        ItemFactory::createOne(['content' => 'hello world!']);
        $client = static::createClient();
        $iri = $this->findIriBy(Item::class, ['content' => 'hello world!']);
        $client->request(
            'GET',
            $iri
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testCreateItem()
    {
        $client = static::createClient();
        $client->request(
            'POST',
            '/api/items',
            ['json' => ['content' => 'mon item']]
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testUpdateItem()
    {
        ItemFactory::createOne(['content' => 'little hello world!']);
        $client = static::createClient();
        $iri = $this->findIriBy(Item::class, ['content' => 'little hello world!']);
        $client->request(
            'PUT',
            $iri,
            ['json' => [
                'content' => 'big hello world!',
            ]]
        );
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
    }

    public function testPatchItem()
    {
        ItemFactory::createOne(['content' => 'ha hello world!']);
        $client = static::createClient();
        $iri = $this->findIriBy(Item::class, ['content' => 'ha hello world!']);
        $client->request(
            'PATCH',
            $iri,
            ['headers' => [
                'Content-Type' => 'application/merge-patch+json; charset=utf-8',
            ], 'json' => ['content' => 'ho hello world']]
        );
        $this->assertResponseIsSuccessful();
    }

    public function testDeleteItem()
    {
        ItemFactory::createOne(['content' => 'min hello world!']);
        $client = self::createClient();
        $iri = $this->findIriBy(Item::class, ['content' => 'min hello world!']);
        $client->request('DELETE', $iri);
        $this->assertResponseStatusCodeSame(204);
        $this->assertNull(
            static::getContainer()->get('doctrine')->getRepository(Item::class)->findOneBy(['content' => 'min hello world!'])
        );
    }
}
