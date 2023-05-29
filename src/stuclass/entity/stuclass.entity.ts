import { RowDataPacket } from "mysql2";

export interface StuClassEntity extends RowDataPacket {
  /**
   * @param id 班级ID，主键，自动递增
   */
  id: number;
  /**
   * @param name 班级名称
   */
  name: string;
}
