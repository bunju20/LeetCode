var asteroidCollision = function(asteroids) {
  let i = 0;
  stack = [];
  while (i < asteroids.length) {
    if (asteroids[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
      stack.push(asteroids[i++]);
    } else if (asteroids[i] + stack[stack.length - 1] < 0) { 
      stack.pop();//음수가 깨뜨렸으니까 더 깰수있는지 확인해야댐
    } else if (asteroids[i] + stack[stack.length - 1] === 0) { 
      stack.pop();
      i++; //둘다 깨졌으니까
    } else { 
      i++;//음수가 깨짐
    }
  }
  return stack;
};