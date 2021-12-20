import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Transportistas, TransportistasRelations} from '../models';

export class TransportistasRepository extends DefaultCrudRepository<
  Transportistas,
  typeof Transportistas.prototype.identidad,
  TransportistasRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Transportistas, dataSource);
  }
}
