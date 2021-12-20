import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Rutas, RutasRelations} from '../models';

export class RutasRepository extends DefaultCrudRepository<
  Rutas,
  typeof Rutas.prototype.id,
  RutasRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Rutas, dataSource);
  }
}
