<?php

namespace App\Tests\Entity;

use App\Entity\ToDoListItem;
use PHPUnit\Framework\TestCase;

class ToDoListItemUnitTest extends TestCase
{
    public function testCreateToDoListItem()
    {
        $content = 'hello world!';
        $priority = 3;
        $difficulty = 3;
        $deadline = new \DateTimeImmutable('1987-07-31T00:00:00+00:00');
        $done = 1;
        $createdAt = new \DateTimeImmutable('1985-07-31T00:00:00+00:00');
        $updatedAt = new \DateTimeImmutable('1986-07-31T00:00:00+00:00');

        $toDoListItem = new ToDoListItem();
        $toDoListItem->setContent($content);
        $toDoListItem->setPriority($priority);
        $toDoListItem->setPriority($difficulty);
        $toDoListItem->setDeadline($deadline);
        $toDoListItem->setDone($done);
        $toDoListItem->setCreatedAt($createdAt);
        $toDoListItem->setUpdatedAt($updatedAt);

        $this->assertEquals($content, $toDoListItem->getContent());
        $this->assertEquals($priority, $toDoListItem->getPriority());
        $this->assertEquals($difficulty, $toDoListItem->getPriority());
        $this->assertEquals($deadline, $toDoListItem->getDeadline());
        $this->assertEquals($done, $toDoListItem->getDone());
        $this->assertEquals($createdAt, $toDoListItem->getCreatedAt());
        $this->assertEquals($updatedAt, $toDoListItem->getUpdatedAt());
    }
}
