---
title: Database Schema – Primary and Foreign Keys
type: 
tags:
  - area/swiftui
  - swiftui/swiftdata
date: 2025-04-05 21:22
last edited: 2025-04-05 21:22
uid: 20250405212216
---
## Concept  

- A **schema** is the blueprint that defines the structure of a database (tables, columns, data types).  
- A **primary key** uniquely identifies each record in a table.  
- A **foreign key** links records between different tables.

## Example  

- **Workout Table:** Has a primary key `workoutID`.  
- **Exercise Table:** Has a primary key `exerciseID`.  
- **WorkoutExercise Join Table:** Contains both `workoutID` (foreign key to Workouts) and `exerciseID` (foreign key to Exercises).

## Source  

- [Wikipedia - Database Schema](https://en.wikipedia.org/wiki/Database_schema)