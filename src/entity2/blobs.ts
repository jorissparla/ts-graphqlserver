import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from "typeorm";

@Entity("blobs", { schema: "dbo" })
export class blobs extends BaseEntity {
  @PrimaryColumn({
    type: "uniqueidentifier",
    name: "id",
    default: () => "newid()"
  })
  id: string;
  @Column("datetime", {
    nullable: true,
    default: () => "format(getdate(),'yyyy-MM-dd')",
    name: "date"
  })
  date: Date | null;

  @Column("nvarchar", {
    nullable: true,
    name: "json"
  })
  json: string | null;
}
