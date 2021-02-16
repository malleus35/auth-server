import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';
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

  @BeforeInsert() async hashPassword() {
    this.pwd = await hash(this.pwd, 10);
  }
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
}
