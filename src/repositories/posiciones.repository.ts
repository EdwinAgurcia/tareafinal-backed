import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Posiciones, PosicionesRelations} from '../models';

export class PosicionesRepository extends DefaultCrudRepository<
  Posiciones,
  typeof Posiciones.prototype.id,
  PosicionesRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Posiciones, dataSource);
  }
}
