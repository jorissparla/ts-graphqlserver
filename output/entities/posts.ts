import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("posts",{schema:"dbo"})
export class posts {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        default: () => "'Title'",
        name:"title"
        })
    title:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        name:"body"
        })
    body:string;
        

    @Column("datetime",{ 
        nullable:false,
        default: () => "getdate()",
        name:"created_at"
        })
    created_at:Date;
        

    @Column("datetime",{ 
        nullable:false,
        default: () => "getdate()",
        name:"updated_at"
        })
    updated_at:Date;
        
}
