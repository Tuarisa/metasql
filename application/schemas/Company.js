({
  name: { type: 'string', unique: true },
  addresses: { many: 'Address' },
});
