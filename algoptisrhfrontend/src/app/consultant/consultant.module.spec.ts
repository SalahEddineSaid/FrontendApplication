import { ConsultantModule } from './consultant.module';

describe('ConsultantModule', () => {
  let consultantModule: ConsultantModule;

  beforeEach(() => {
    consultantModule = new ConsultantModule();
  });

  it('should create an instance', () => {
    expect(consultantModule).toBeTruthy();
  });
});
