import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {CharacterTreasure} from "./CharacterTreasure";

@Entity()
export class CharacterTreasureItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  quantity!: number;

  @Column()
  weightInLbs?: number;

  @Column()
  bookmarked!: boolean;

  @Column()
  magical!: boolean;

  @Column()
  description?: string;

  @ManyToOne(type => CharacterTreasure, treasure => treasure.items)
  parentTreasure!: CharacterTreasure;
}
