# -*- coding: utf-8 -*-

from odoo import models, fields


class OwlDev(models.Model):
    _name = "owl_dev_todo_list"
    _description = 'My Todo List'

    name = fields.Char(string="Task Name")
    complete=fields.Boolean(string="Completed")
    color=fields.Char(string="Color")
     

