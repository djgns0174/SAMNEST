package com.example.samnest_back.travel_plan.repository;

import com.example.samnest_back.travel_plan.entity.DailyScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DailyScheduleRepository extends JpaRepository<DailyScheduleEntity, Integer> {
}
