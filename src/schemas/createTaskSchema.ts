import Nope from 'nope-validator';

const createTaskSchema = Nope.object().shape({
  name: Nope.string().min(3).max(20).required('Required'),
  assigneeId: Nope.string().required('Required'),
  dueDate: Nope.date('Should be a valid date').required('Required'),
  pointEstimate: Nope.string().required('Required'),
  status: Nope.string().required('Required'),
  tags: Nope.array().of(Nope.string()).minLength(0, 'Select at least one tag').required('Required'),
});

export { createTaskSchema };
