import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Recorridos, RecorridosRelations} from '../models';

export class RecorridosRepository extends DefaultCrudRepository<
  Recorridos,
  typeof Recorridos.prototype.id,
  RecorridosRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Recorridos, dataSource);
  }
}
