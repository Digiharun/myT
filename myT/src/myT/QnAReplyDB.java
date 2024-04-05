package myT;

import java.sql.*;
import java.util.*;

public class QnAReplyDB {
    // qreply
    // +-------------+-------------+------+-----+---------+----------------+
    // | Field       | Type        | Null | Key | Default | Extra          |
    // +-------------+-------------+------+-----+---------+----------------+
    // | reply_id    | int(11)     | NO   | PRI | NULL    | auto_increment |
    // | qna_id      | int(11)     | NO   | MUL | NULL    |                |
    // | reply_title | varchar(50) | NO   |     | NULL    |                |
    // | reply_text  | text        | NO   |     | NULL    |                |
    // | reply_date  | datetime    | NO   |     | NULL    |                |
    // +-------------+-------------+------+-----+---------+----------------+

    public Connection conn = null;
	public Statement stmt = null;
}