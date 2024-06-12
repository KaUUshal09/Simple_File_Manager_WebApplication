<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
     <div class="main w-full min-h-screen bg-zinc-900">
        <div class="form px-10 py-10 text-white">
            <form action="/create" method="post">
                <input class="block w-full rounded-md px-5 py-2 bg-zinc-800" type="text" placeholder="Title goes here.." name="title">
                <textarea class="block w-full rounded-md mt-2 px-5 py-2 bg-zinc-800 resize-none" placeholder="Write your task details here.." name="details"></textarea>
                <input class="mt-2 bg-blue-600 px-5 py-2 rounded-md" type="submit" value="Create Task">
            </form>
        </div>
        <div class="tasks p-10 flex gap-5 flex-wrap"> 
            <% if(files.length > 0){ %>
                <% files.forEach(function(val){ %>
                    <div class=" w-80 px-3 py-4  bg-zinc-800 rounded-md">
                        <h1 class="text-white text-3xl "><%=  val %></h1>
                        <div class="flex w-full justify-between item-center mt-3">
                            <a  class="text-blue-600 inline-block " href="/file/<%= val %>">Read more.</a>
                            <a  class="text-zinc-600 " href="/edit/<%= val %>">edit</a>
                            <a class="delete-link text-yellow-600" href="/delete/<%= val %>" data-file="<%= val %>">delete</a>
                        </div>
                        
                    </div>
                <% }) %>
            <% }else{ %>
                <h3 class="text-zinc-600">No tasks yet..</h3>
            <%  } %>
           
            
        </div>

     </div>
    
</body>
</html>

