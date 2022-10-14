"""empty message

Revision ID: cbea9056f017
Revises: 
Create Date: 2022-10-08 02:14:39.606666

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cbea9056f017'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('calificaciones',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('inscripcion', sa.Boolean(), nullable=False),
    sa.Column('actividad', sa.Boolean(), nullable=False),
    sa.Column('calificacion', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('inscribir',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('perfil', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('usuario', sa.String(length=120), nullable=False),
    sa.Column('correo', sa.String(length=80), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('perfil', sa.String(length=120), nullable=False),
    sa.Column('clave', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('clave'),
    sa.UniqueConstraint('correo'),
    sa.UniqueConstraint('usuario')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('inscribir')
    op.drop_table('calificaciones')
    # ### end Alembic commands ###