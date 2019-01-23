import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("migrations",{schema:"dbo"})
export class migrations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        name:"migration"
        })
    migration:string;
        

    @Column("int",{ 
        nullable:false,
        name:"batch"
        })
    batch:number;
        
}
