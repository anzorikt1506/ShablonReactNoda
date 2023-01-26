

module.exports  = (app) =>{
   const object_f = require("./zapros/object.js")
   app
    .route('/object')
    .post(object_f.object)

   app
   .route('/objectspis')
   .post(object_f.nachObject)

   app
   .route('/objectupdate')
   .post(object_f.updateObject)

   app
   .route('/objectdel')
   .post(object_f.delObject)

   app
   .route('/objectUpdateTable')
   .post(object_f.updateObjectTabel)

   const department_f = require("./zapros/department.js") 

   app
   .route('/addDepartment')
   .post(department_f.department)

   
   app
   .route('/department')
   .post(department_f.nachdepartment)

   app
   .route('/departmentRedName')
   .post(department_f.updateNameDepartment)

   app
   .route('/departmentdel')
   .post(department_f.delDepartment)
      
   const roles_f = require("./zapros/roles.js") 

   app
   .route('/rolesoption')
   .post(roles_f.rolesoption)

   app
   .route('/rolesSpis')
   .get(roles_f.rolesSpis)

   app
   .route('/addroles')
   .post(roles_f.addroles)
   
   app
   .route('/redroles')
   .post(roles_f.redroles)

   app
   .route('/redemailroles')
   .post(roles_f.redemailroles)

   app
   .route('/rolesdel')
   .post(roles_f.rolesdel)  

   app
   .route('/redrolespassword')
   .post(roles_f.redrolespassword)  

const users_f = require("./zapros/users.js") 

   app
   .route('/userspassword')
   .post(users_f.reduserspassword)

   app
   .route('/usersSpis')
   .get(users_f.usersSpis)

   app
   .route('/addusers')
   .post(users_f.addusers)
   
   app
   .route('/redusers')
   .post(users_f.redusers)

   app
   .route('/usersdel')
   .post(users_f.usersdel)  

const avtoriz = require("./zapros/avtoriz.js") 
   app
   .route('/test1')
   .get(avtoriz.registration) 

   app
   .route('/logout')
   .get(avtoriz.logout) 

   app
   .route('/rolesavtoriz')
   .post(avtoriz.registration) 

   app
   .route('/refresh')
   .get(avtoriz.refresh) 

const tasks = require("./zapros/tasks.js") 
   
app
.route('/tasksNoWork')
.post(tasks.tasksNoWork) 

  app
  .route('/tasksEndWork')
  .post(tasks.tasksEndWork) 

   app
   .route('/tasksStartWork')
   .post(tasks.tasksStartWork) 

   app
   .route('/add_tasks')
   .post(tasks.tasks_add) 

   app
   .route('/tasks_update')
   .post(tasks.tasks_update_z) 

}

