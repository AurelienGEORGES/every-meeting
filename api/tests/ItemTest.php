<?php

namespace App\Tests;

use App\Entity\Item;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ItemTest extends TestCase
{
    public function testGetId()
    {
        $item = new Item();
        $this->assertNull($item->getId());
    }

    public function testGetContent()
    {
        $item = new Item();
        $this->assertNull($item->getContent());
    }

    public function testSetContent()
    {
        $item = new Item();
        $content = 'Test Content';
        $item->setContent($content);
        $this->assertEquals($content, $item->getContent());
    }
}

// class ItemTest extends WebTestCase
// {
//     public function testGetItems()
//     {
//         $client = static::createClient();
//         $client->request('GET', '/api/items');
//         $this->assertResponseIsSuccessful();
//     }

//     public function testGetItem()
//     {
//         $client = static::createClient();
//         $client->request('GET', '/api/items/1');
//         $this->assertResponseIsSuccessful();
//     }

//     public function testCreateItem()
//     {
//         $client = static::createClient();
//         $client->request(
//             'POST',
//             '/api/items',
//             [],
//             [],
//             ['CONTENT_TYPE' => 'application/json'],
//             '{"content": "New Item Content"}'
//         );

//         $this->assertResponseIsSuccessful();
//     }

//     public function testUpdateItem()
//     {
//         $client = static::createClient();
//         $client->request(
//             'PUT',
//             '/api/items/1',
//             [],
//             [],
//             ['CONTENT_TYPE' => 'application/json'],
//             '{"content": "Updated Item Content"}'
//         );

//         $this->assertResponseIsSuccessful();
//     }

//     public function testPatchItem()
//     {
//         $client = static::createClient();
//         $client->request(
//             'PATCH',
//             '/api/items/1',
//             [],
//             [],
//             ['CONTENT_TYPE' => 'application/merge-patch+json'],
//             '{"content": "Patched Item Content"}'
//         );

//         $this->assertResponseIsSuccessful();
//     }

//     public function testDeleteItem()
//     {
//         $client = static::createClient();
//         $client->request('DELETE', '/api/items/1');
//         $this->assertResponseIsSuccessful();
//     }
// }
