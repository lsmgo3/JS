import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
  } from 'typeorm';
  import { Length, IsNotEmpty, IsEmail , IsUUID } from 'class-validator';
  import * as bcrypt from 'bcryptjs';
  



  @Entity()
  export default class content {
    @PrimaryGeneratedColumn()
    number: number;
  
    @Column({ nullable: true })
    @Length(4, 10)
    contentid: string;

    @Column({ nullable: true })
    // @IsEmail()
    @IsUUID('4')
    @Generated("uuid")
    id: string;
  
    @Column({ nullable: true })
    // @Length(2, 20)
    name: string;
  
    @Column({ nullable: true })
    // @IsNotEmpty()  ;유니크
    @Length(4, 20)
    password: string;
  
    @Column({ nullable: true })
    topic: string;
  
    @Column({ nullable: true })
    tag: string;
  
    @Column({ nullable: true })
    like : number
  
    @Column({ nullable: true })
    unlike : number
  
    @Column({ nullable: true })
    @CreateDateColumn()
    createAt : Date
  
    @Column({ nullable: true })
    @UpdateDateColumn()
    updateAt : Date
  
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
      return bcrypt.compareSync(unencryptedPassword, this.password);
    }
  }
  