<?php

namespace App\Controller\Admin;

use App\Entity\ToDoListItem;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ToDoListItemCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ToDoListItem::class;
    }


    public function configureFields(string $toDoListItem): iterable
    {
        return [
            IdField::new('id')->onlyOnDetail(),
            TextField::new('content'),
            DateTimeField::new('deadline'),
            IntegerField::new('priority'),
            IntegerField::new('difficulty'),
            IntegerField::new('done'),
            DateTimeField::new('created_at')->hideWhenUpdating(),
            DateTimeField::new('updated_at')->hideWhenCreating(),
        ];
    }
}
