import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("planner",{schema:"dbo"})
export class planner {

    @Column("uniqueidentifier",{ 
        nullable:true,
        name:"id"
        })
    id:string | null;
        

    @Column("nchar",{ 
        nullable:true,
        length:10,
        name:"name"
        })
    name:string | null;
        
}
