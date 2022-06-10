import { AuthGuard } from './auth.guard';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

export const Auth = (...roles) => {
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard));
};
