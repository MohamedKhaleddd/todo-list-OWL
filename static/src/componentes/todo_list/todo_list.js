/** @odoo-module **/

import { registry } from "@web/core/registry";

import { Component, useState, onWillStart, useRef } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';

export class OwlDev_Todo_list extends Component{
    setup(){
        this.state= useState({
            task:{name:"",color:"#FF0000",complete:false},
            task_list: [],
            isEdit:false,
            isActive:false
        })
    
    this.orm = useService("orm");
    this.model = "owl_dev_todo_list";
    this.searchInput= useRef("search-input")

     onWillStart(async () => {
        await this.getAllTasks();
        
    })
}
    async getAllTasks(){
        this.state.task_list= await this.orm.searchRead(this.model,[],[
            "name","color","complete"
        ])
    }

    async saveTask(){

        if (this.state.isEdit){
            await this.orm.write(this.model,[this.state.isActive],this.state.task)

        
        }
        else{
            await this.orm.create(this.model,[{
                name:this.state.task.name,
                color: this.state.task.color,
                complete:this.state.task.complete,
        }
    ])}

        
        await this.getAllTasks()

}
    
    addTask(){
        this.clearTask()
        this.state.isActive=false;
        this.state.isEdit=false;

    }
    editTask(task){
        this.state.isEdit= true;
        this.state.isActive=task.id;
        this.state.task={...task};

    }
    clearTask(){
        this.state.task={name:"",color:"#FF0000",complete:false};


    }
    async deleteTask(task){
        await this.orm.unlink(this.model,[task.id])
        await this.getAllTasks();
        await this.clearTask();
    }
    async searchTask(){
        const task= this.searchInput.el.value;
        this.state.task_list= await this.orm.searchRead(this.model,[['name','ilike',task]],[
            "name","color","complete"
        ])
    }
    async uncheck(e, task){
        await this.orm.write(this.model,[task.id],{complete:e.target.checked})
        await this.getAllTasks();
    }
    async updateColor(e, task){
        await this.orm.write(this.model,[task.id],{color:e.target.value})
        await this.getAllTasks()
    }

} 
OwlDev_Todo_list.template='owl_dev_todo_template';
registry.category('actions').add('owl_dev.todo_list_action_js',OwlDev_Todo_list)