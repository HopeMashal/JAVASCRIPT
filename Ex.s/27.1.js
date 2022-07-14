/* const CheckNumber1=(num)=>{
  return new Promise((resolve,reject)=>{
  if(num<10) reject({num:num});
  else resolve({num:num});
})};
CheckNumber1(11)
  .then((res)=>{
    console.log(`The number ${res.num} is greater than 10`);
  })
  .catch((res)=>{
    console.log(`The number ${res.num} is less than 10`);
  }) */

  const CheckNumber=(num)=>{
    return new Promise((resolve,reject)=>{
    if(num<10) reject({num:num});
    else resolve({num:num});
  })};
  let array=[3,5,7,9,11,13,15,17];
  for(let i=0;i<array.length;i++)
    {CheckNumber(array[i])
      .then((res)=>{
        console.log(`The number ${res.num} is greater than 10`);
      })
      .catch((res)=>{
        console.log(`The number ${res.num} is less than 10`);
    })}