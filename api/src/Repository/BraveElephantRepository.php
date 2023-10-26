<?php

namespace App\Repository;

use App\Entity\BraveElephant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BraveElephant>
 *
 * @method BraveElephant|null find($id, $lockMode = null, $lockVersion = null)
 * @method BraveElephant|null findOneBy(array $criteria, array $orderBy = null)
 * @method BraveElephant[]    findAll()
 * @method BraveElephant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BraveElephantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BraveElephant::class);
    }

//    /**
//     * @return BraveElephant[] Returns an array of BraveElephant objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?BraveElephant
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
