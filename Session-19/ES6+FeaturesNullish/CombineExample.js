const user = {
  name: 'Omkar',
  details: { Physics: 90 },
};

console.log(user?.details?.marks ?? 'No Marks');
