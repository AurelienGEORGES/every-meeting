<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240822122941 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE to_do_list_item ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE to_do_list_item ADD CONSTRAINT FK_B3FB63A6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_B3FB63A6A76ED395 ON to_do_list_item (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE to_do_list_item DROP FOREIGN KEY FK_B3FB63A6A76ED395');
        $this->addSql('DROP INDEX IDX_B3FB63A6A76ED395 ON to_do_list_item');
        $this->addSql('ALTER TABLE to_do_list_item DROP user_id');
    }
}
