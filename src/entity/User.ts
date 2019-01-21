import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({
    type: "uniqueidentifier",
    name: "id",
    default: () => "newid()"
  })
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
  @Column()
  password: string;

  addId() {
    this.id = uuidv4();
  }
}
