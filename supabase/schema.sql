-- Ejecutar este script una sola vez en el SQL Editor del proyecto de Supabase.

create table if not exists tournament_state (
  id int primary key default 1 check (id = 1),
  initial_pool numeric not null default 0,
  current_pool numeric not null default 0,
  split_first int not null default 50,
  split_second int not null default 30,
  split_third int not null default 20,
  updated_at timestamptz not null default now()
);

insert into tournament_state (id, initial_pool, current_pool)
values (1, 10000, 10000)
on conflict (id) do nothing;

alter table tournament_state enable row level security;

create policy "Lectura publica"
  on tournament_state for select
  to anon, authenticated
  using (true);

create policy "Actualizacion solo admin autenticado"
  on tournament_state for update
  to authenticated
  using (true)
  with check (true);

-- Habilita las actualizaciones en tiempo real para que premios.html
-- refleje los cambios sin necesidad de recargar la pagina.
alter publication supabase_realtime add table tournament_state;

-- Suma atomicamente al pozo actual (evita condiciones de carrera
-- si se presionan los botones de Re Buy / Add On rapido).
create or replace function increment_pool(monto numeric)
returns tournament_state
language sql
security invoker
as $$
  update tournament_state
  set current_pool = current_pool + monto,
      updated_at = now()
  where id = 1
  returning *;
$$;
