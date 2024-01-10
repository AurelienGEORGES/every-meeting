<?php

namespace App\Tests;

use App\Entity\Item;
use PHPUnit\Framework\TestCase;

class ItemUnitTest extends TestCase
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
