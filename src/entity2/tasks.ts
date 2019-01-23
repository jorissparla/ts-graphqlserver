import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks", { name: "app", schema: "dbo" })
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id"
  })
  id: number;

  @Column("nvarchar", {
    nullable: false,
    name: "body"
  })
  body: string;

  @Column("datetime", {
    nullable: true,
    name: "created_at",
    default: () => "getdate()"
  })
  created_at: Date | null;

  @Column("datetime", {
    nullable: true,
    name: "updated_at",
    default: () => "getdate()"
  })
  updated_at: Date | null;
}
