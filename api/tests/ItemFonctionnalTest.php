<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class ItemFonctionnalTest extends ApiTestCase
{
    public function testGetItems()
    {
        $client = static::createClient();
        $client->request(
            'GET',
            '/api/items'
        );
        $this->assertResponseIsSuccessful();
    }

    public function testGetItem()
    {
        $client = static::createClient();
        $client->request(
            'GET',
            '/api/items/25'
        );
        $this->assertResponseIsSuccessful();
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
    }

    public function testUpdateItem()
    {
        $client = static::createClient();
        $client->request(
            'PUT',
            '/api/items/45',
            ['json' => ['content' => 'mon item update']]
        );
        $this->assertResponseIsSuccessful();
    }

    public function testPatchItem()
    {
        $client = static::createClient();
        $client->request(
            'PATCH',
            '/api/items/15',
            ['headers' => [
                'Content-Type' => 'application/merge-patch+json',
            ], 'json' => ['content' => 'mon item patched']]
        );
        $this->assertResponseIsSuccessful();
    }

    public function testDeleteItem()
    {
        $client = self::createClient();
        $client->request('DELETE', '/api/items/9');
        $this->assertResponseIsSuccessful(204);
    }
}
