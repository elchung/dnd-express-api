import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {CharacterTreasure} from "./CharacterTreasure";

@Entity()
export class CharacterTreasureMoney {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  gold!: number;

  @Column()
  silver!: number;

  @Column()
  electrum!: number;

  @Column()
  copper!: number;

  @OneToOne(type => CharacterTreasure, parentTreasure => parentTreasure.money)
  @JoinColumn()
  parentTreasure!: CharacterTreasure
}
