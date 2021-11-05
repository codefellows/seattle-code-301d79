# Lecture Notes

## Cache
- data stored in memory for faster access
- used to reduce or improve the latency of a system
- can be located in different parts of your system depending on your goal

## Latencey
- the amount of time a certain opperation takes to complete in a system
- generally measured in a time duration, like ms

## Data access scale 1 MB
1. data in memory (.25 ms) 1x
2. data on disk ssd (1 ms) 4x $$
4. transfer memory over network (close distance) (10 ms) 10x
3. data on disk hdd (20 ms) 2x
4. round trip transfer of data accross the world (150 ms) 7.5x

## in memory db
- redis 
- this one allows you to query just like a reg db