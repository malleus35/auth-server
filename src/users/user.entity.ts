import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  pwd: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @BeforeInsert() async hashPassword() {
    this.pwd = await bcrypt.hash(this.pwd, 10);
  }
}
